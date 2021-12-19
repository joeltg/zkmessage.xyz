// server side only

import { readFileSync } from "fs"

import type { VKeys } from "utils/types"

export function getVKeys(): VKeys {
	const sign = JSON.parse(readFileSync("public/sign.vkey.json", "utf-8"))
	const reveal = JSON.parse(readFileSync("public/reveal.vkey.json", "utf-8"))
	const deny = JSON.parse(readFileSync("public/deny.vkey.json", "utf-8"))
	return { sign, reveal, deny }
}