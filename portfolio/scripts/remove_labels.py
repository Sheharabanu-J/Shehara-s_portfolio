import os
import re

directory = 'src/components'

# A robust regex capturing the <p> block wrapping the // 0X. label
pattern = r'<p className="text-xs font-mono[^>]*uppercase tracking-widest mb-3">\s*// 0\d\.\s*[^<]*</p>\s*'

count = 0
for file in os.listdir(directory):
    if file.endswith('.jsx'):
        filepath = os.path.join(directory, file)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1

print(f"Removed numeric headings in {count} files.")
