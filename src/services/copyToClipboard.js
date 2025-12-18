export async function copyToClipboard(text) {
  if (!text) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Clipboard copy failed", err);
    return false;
  }
}
