import Link from 'next/link';

export default function Home() {
   (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Grade 12 Mathematics Content</h1>
      <p>This site provides chapter summaries for the Mathematics Grade 12 handbook. Choose a paper below to see the chapters covered:</p>
      <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
        <li>
          <Link href="/paper1">Paper 1 – Algebra, Functions, Calculus &amp; Analytical Geometry</Link>
        </li>
        <li>
          <Link href="/paper2">Paper 2 – Trigonometry, Geometry, Statistics &amp; Probability</Link>
        </li>
      </ul>
    </main>
  );
}
