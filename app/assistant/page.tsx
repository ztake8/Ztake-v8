"use client"

import { Suspense } from "react"
import AssistantScreen from "./screen"

export default function AssistantPage(){ return (<Suspense fallback={<div className="p-10 text-white">Loading assistant...</div>}><AssistantScreen/></Suspense>) }
