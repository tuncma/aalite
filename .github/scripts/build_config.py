import yaml, json, datetime

with open('selectors.yml', 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

def join_list(items):
    if isinstance(items, list):
        return ', '.join(str(i) for i in items)
    return str(items)

config = {
    "version": data['version'],
    "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
    "selectors_mobile": {
        "ad_showing":      join_list(data['mobile']['ad_showing']),
        "skip_button":     join_list(data['mobile']['skip_button']),
        "warning_modal":   join_list(data['mobile'].get('warning_modal', [])),
        "overlay_cleanup": join_list(data['mobile'].get('overlay_cleanup', []))
    },
    "selectors_desktop": {
        "ad_showing":      join_list(data['desktop']['ad_showing']),
        "skip_button":     join_list(data['desktop']['skip_button']),
        "warning_modal":   join_list(data['desktop'].get('warning_modal', [])),
        "overlay_cleanup": join_list(data['desktop'].get('overlay_cleanup', []))
    }
}

with open('RemoteConfig.json', 'w', encoding='utf-8') as f:
    json.dump(config, f, indent=2, ensure_ascii=False)

print("RemoteConfig.json olusturuldu. Versiyon:", data['version'])
