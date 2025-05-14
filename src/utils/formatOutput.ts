/**
 * Formats the output text by adding syntax highlighting for code blocks
 */
export const formatOutput = (text: string): string => {
  // Replace code blocks with syntax highlighted versions
  const formattedText = text.replace(
    /```(\w*)\n([\s\S]*?)\n```/g,
    (_, language, code) => {
      return `<div class="bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto">
                <div class="text-xs text-gray-400 mb-2">${language || 'code'}</div>
                <pre>${escapeHtml(code)}</pre>
              </div>`;
    }
  );

  // Replace newlines with <br> tags for proper HTML rendering
  return formattedText.replace(/\n/g, '<br>');
};

/**
 * Escapes HTML special characters to prevent XSS
 */
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};