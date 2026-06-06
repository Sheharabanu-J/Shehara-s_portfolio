import os
import re

directory = 'src'

replacements = [
    # Backgrounds
    (r'#050510', '#0A0F1C'),
    (r'#0a0a1f', '#0A0F1C'),
    (r'#05051f', '#0A0F1C'),
    (r'#0a0a3f', '#0f172a'),
    (r'#080820', '#0f172a'),
    
    # Texts
    (r'#e8e8ff', '#E2E8F0'),
    (r'rgba\(\s*232\s*,\s*232\s*,\s*255\s*,', 'rgba(226, 232, 240, '),
    
    # Golds & Yellows -> Ice Blue (#38BDF8)
    (r'#FFD700', '#38BDF8'),
    (r'rgba\(\s*255\s*,\s*215\s*,\s*0\s*,', 'rgba(56, 189, 248, '),
    (r'#FFA500', '#0EA5E9'),
    (r'#FFE55C', '#E2E8F0'),
    (r'bg-yellow-500', 'bg-[#38BDF8]'),
    (r'text-yellow-500', 'text-[#38BDF8]'),
    
    # Original Blues -> Ice Blue / Secondary Blue
    (r'#0066ff', '#38BDF8'),
    (r'rgba\(\s*0\s*,\s*102\s*,\s*255\s*,', 'rgba(56, 189, 248, '),
    (r'#4d9eff', '#0EA5E9'),
    (r'#1a1aff', '#0EA5E9'),
    
    # Pinks and Purples & Others (Hero tech badges, etc.) to Blue / Neutral
    (r'#f472b6', '#38BDF8'),
    (r'#E34F26', '#38BDF8'),
    (r'#1572B6', '#0EA5E9'),
    (r'#7952B3', '#94A3B8'),
    (r'#F7DF1E', '#E2E8F0'),
    (r'#61DAFB', '#38BDF8'),
    (r'#339933', '#0EA5E9'),
    (r'#003B57', '#94A3B8'),
    (r'#a78bfa', '#0EA5E9'),
    (r'#25D366', '#38BDF8'),
    (r'#0A66C2', '#0EA5E9'),
    
    # Remove text styling gradients of gold and mixed
    (r'gradient-text-gold', 'gradient-text-blue'),
    (r'gradient-text-mixed', 'gradient-text-blue'),
    
    # Glass cards and dark backgrounds overrides
    (r'rgba\(\s*10\s*,\s*10\s*,\s*31\s*,\s*0\.6\s*\)', 'rgba(255, 255, 255, 0.05)'),
    (r'rgba\(\s*10\s*,\s*10\s*,\s*31\s*,\s*0\.8\s*\)', 'rgba(255, 255, 255, 0.05)'),
    
    # Replace Red and green dots in terminal
    (r'bg-red-500', 'bg-slate-700'),
    (r'bg-green-500', 'bg-slate-500'),
    (r'text-green-400', 'text-[#38BDF8]'),
    (r'text-purple-400', 'text-[#0EA5E9]'),
    
    # Matrix Easter Egg specific
    (r'#0F0', '#38BDF8'),
    
    # Button styling logic (Solid blue fill or outline)
    # Replaces the dark blue gradient of btn-primary with the new theme
    (r'linear-gradient\(135deg, #0066ff, #1a1aff\)', 'rgba(14, 165, 233, 0.15)')
]

count = 0
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.css'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            original = content
            for old, new in replacements:
                content = re.sub(old, new, content, flags=re.IGNORECASE)

            # Ensure multi-stop gradient classes have the correct syntax after replacements
            if file.endswith('index.css'):
                content = content.replace("linear-gradient(135deg, #38BDF8, #0EA5E9, #E2E8F0)", "linear-gradient(135deg, #E2E8F0, #38BDF8)")

            if content != original:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                count += 1

print(f"Updated colors in {count} files.")
