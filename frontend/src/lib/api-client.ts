export async function api(path: string, opts: RequestInit = {}) {
  const res = await fetch(path, { credentials: 'include', ...opts });
  if(!res.ok) throw new Error(await res.text());
  return res.json();
}
