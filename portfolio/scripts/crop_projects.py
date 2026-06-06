import os
from PIL import Image

def crop_project_image(filename):
    path = os.path.join('public', filename)
    if not os.path.exists(path):
        print(f"File {filename} not found.")
        return

    try:
        with Image.open(path) as im:
            w, h = im.size
            # Only crop if it looks like a full screen screenshot (wide aspect ratio)
            if w > 1500 and h > 800:
                print(f"Cropping {filename}...")
                # Trim browser chrome: top ~85px, bottom ~45px
                # Using relative percentages for better robustness (Top ~9%, Bottom ~5%)
                top = int(h * 0.09)
                bottom = h - int(h * 0.05)
                left = 0
                right = w
                
                cropped_im = im.crop((left, top, right, bottom))
                cropped_im.save(path, quality=95)
                print(f"Successfully cropped and saved {filename}")
            else:
                print(f"Skipping {filename} (not a full screenshot size: {w}x{h})")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

def process_projects():
    projects = [
        'portfolio_hero.png',
        'task_manager.png',
        'tourism_tn.png'
    ]
    for p in projects:
        crop_project_image(p)

if __name__ == "__main__":
    process_projects()
