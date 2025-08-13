export default function TestEnv() {
  const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>Environment Variable Test</h2>
      <p><strong>API Key:</strong> {apiKey ? apiKey : "❌ Undefined"}</p>
      <p>Bu değer local ve Vercel ortamında farklı olabilir. Eğer 'Undefined' görüyorsan, environment variable doğru ayarlanmamış demektir.</p>
    </div>
  );
}
