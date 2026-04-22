const counts = {};

export default function handler(req, res) {
  const event = req.query.event || 'unknown';
  counts[event] = (counts[event] || 0) + 1;
  console.log(`[TRACK] ${event} (total: ${counts[event]}) at ${new Date().toISOString()}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ ok: true, event });
}
