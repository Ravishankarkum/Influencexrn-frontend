import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      className="p-2 rounded bg-gray-300 dark:bg-gray-700"
      onClick={() => setDark(!dark)}
    >
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
