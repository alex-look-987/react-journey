import { useState, useReducer, useContext, useMemo, useCallback } from "react";

// useState

// Infer thew type as "boolean"
const [enabled, setEnabled] = useState(false)

// Explicity set type to "boolean"
const [enable, setEnable] = useState<boolean>(false)

// Common case where you may want to provide a type is when you have a union type

type Status = "idle" | "loading" | "success" | "error";

const [status, setStatus] = useState<Status>("idle")

type RequestState<T> =
| {status: 'idle'}
    | {status: 'loading'}
    | {status: 'success', data: T}
    | {status: 'error', error: Error}

type User = {
    id: number
    name: string
}

const [requestState, setRequestState] = useState<RequestState<User>>({status: 'idle'})

// useReducer