export TestClass from "./testsource"

let messages = []
export const myLog = (msg, meta) => {
    console.log(msg)

    messages.push({
        msg,
        metadata: meta
    })
}

export const writeMessage = () => {
  return messages.join("\n")
}