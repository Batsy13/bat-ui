import { Terminal } from "../ui/terminal"

export const TerminalDemo = () => {
  return <Terminal type="bash" code="button" library="bat/ui"/>
}

export const TerminalBash = () => {
  return <Terminal type="bash" code="button" library="bat/ui"/>
}

export const TerminalCode = () => {
  return <Terminal type="code" code="Copy this text"/>
}

export const TerminalComponentTerminal = () => {
  return <Terminal type="component-terminal" code="Copy this text" library="bat/ui" className="p-4"/>
}