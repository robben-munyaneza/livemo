export function setSearchParam(
  params: URLSearchParams,
  key: string,
  value: string | number | null | undefined
) {
  const v = value === null || value === undefined || value === "" ? null : String(value);
  const next = new URLSearchParams(params);
  if (v === null) next.delete(key);
  else next.set(key, v);
  return next;
}

export function getNumberParam(params: URLSearchParams, key: string) {
  const v = params.get(key);
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}
