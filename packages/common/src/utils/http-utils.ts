// // import fetch from 'cross-fetch'
// import { mergeAbortSignals, TimedAbortSignal, abortable } from './abort-signal-utils.js'

// const DEFAULT_FETCH_TIMEOUT = 60 * 1000 * 3 // 3 minutes
interface FetchOpts {
  body?: any
  method?: string
  headers?: any
  timeout?: number
  signal?: AbortSignal
}

export async function fetchJson(url: URL | string, opts: FetchOpts = {}): Promise<any> {
  if (opts.body) {
    Object.assign(opts, {
      body: JSON.stringify(opts.body),
      headers: { ...opts.headers, 'Content-Type': 'application/json' },
    })
  }

  const res = fetch(String(url), { ...opts, credentials: 'include' })

  // @ts-ignore
  return res.json()
}
