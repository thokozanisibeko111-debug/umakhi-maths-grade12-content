import { useEffect, useState } from 'react';

export default function Paper2() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch('/content_structure.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((chapter) => chapter.paper === 'Paper 2');
        setChapters(filtered);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Paper 2 Chapters</h1>
      <ul>
        {chapters.map((chapter, idx) => (
          <li key={idx}>
            <strong>{chapter.title}</strong>
            <ul>
              {chapter.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
