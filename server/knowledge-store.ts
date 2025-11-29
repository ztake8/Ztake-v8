import fs from 'fs';
import path from 'path';
const DB_PATH = path.join(process.cwd(), 'data', 'knowledge.json');
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
export function readKB(){ try{ return JSON.parse(fs.readFileSync(DB_PATH,'utf-8')); }catch(e){ return []; } }
export function addKnowledge(item){ const items = readKB(); items.push({...item, createdAt: new Date().toISOString()}); fs.writeFileSync(DB_PATH, JSON.stringify(items,null,2),'utf-8'); }
