"""Import verified public media once, then keep it in this repository."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,time,urllib.request

root=Path(__file__).resolve().parents[2]
entries=json.loads((root/'.github/media-manifest.json').read_text())
origin='https://dancing-fudge-85f861.netlify.app/'

def sync(entry):
    name=entry['path']
    if not name.startswith('media/') or '..' in Path(name).parts:raise ValueError(name)
    target=root/name
    if target.is_file() and hashlib.sha256(target.read_bytes()).hexdigest()==entry['sha256']:return
    for attempt in range(4):
        try:
            request=urllib.request.Request(origin+name,headers={'User-Agent':'PARK-FRAME-media-migration'})
            with urllib.request.urlopen(request,timeout=90) as response:data=response.read()
            if len(data)!=entry['size'] or hashlib.sha256(data).hexdigest()!=entry['sha256']:raise ValueError('Media verification failed: '+name)
            target.parent.mkdir(parents=True,exist_ok=True)
            temporary=target.with_suffix(target.suffix+'.partial');temporary.write_bytes(data);temporary.replace(target)
            return
        except Exception:
            if attempt==3:raise
            time.sleep(2**attempt)

with ThreadPoolExecutor(max_workers=6) as pool:list(pool.map(sync,entries))
print(f'All {len(entries)} media files match the original SHA-256 manifest.')
