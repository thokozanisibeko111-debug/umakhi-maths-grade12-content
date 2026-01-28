import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Maths Grade 12 Content</h1>
      <p>Select a paper to view the chapters:</p>
      <ul>
        <li><Link href="/paper1">Paper 1</Link></li>
        <li><Link href="/paper2">Paper 2</Link></li>
      </ul>
    </div>
  );
}
