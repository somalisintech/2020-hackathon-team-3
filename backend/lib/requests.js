const queryString = require("query-string")
const fetch = require("node-fetch")

const POST = async ({ url, data }, clb) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const jsonRes = await res.json()

    console.log({ jsonRes })

    return res.ok ? clb(null, jsonRes) : clb(jsonRes, null)
  } catch (error) {
    console.log(error)
    clb({ message: "Request failed" })
  }
}

const GET = async ({ url, data }, clb) => {
  try {
    const res = await fetch(`${url}?${queryString.stringify(data)}`)

    const jsonRes = await res.json()

    return res.ok ? clb(null, jsonRes) : clb(jsonRes, null)
  } catch (error) {
    console.log(error)
    clb({ message: "Request failed" })
  }
}

const PUT = async ({ url, data }, clb) => {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const jsonRes = await res.json()

    return res.ok ? clb(null, jsonRes) : clb(jsonRes, null)
  } catch (error) {
    clb({ message: "Request failed" })
  }
}

const DELETE = async ({ url, data }, clb) => {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const jsonRes = await res.json()

    return res.ok ? clb(null, jsonRes) : clb(jsonRes, null)
  } catch (error) {
    clb({ message: "Request failed" })
  }
}

const PATCH = async ({ url, data }, clb) => {
  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const jsonRes = await res.json()


    return res.ok ? clb(null, jsonRes) : clb(jsonRes, null)
  } catch (error) {
    clb({ message: "Request failed" })
  }
}

module.exports = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}
