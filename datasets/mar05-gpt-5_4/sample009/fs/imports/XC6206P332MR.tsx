import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VSS"],
  pin2: ["VOUT"],
  pin3: ["VIN"]
} as const

export const XC6206P332MR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C347376"
  ]
}}
      manufacturerPartNumber="XC6206P332MR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="1.1013439999999264mm" pcbY="-0.9499599999999191mm" width="1.0374884mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.1013439999999264mm" pcbY="0.9499599999999191mm" width="1.0374884mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.10134400000004mm" pcbY="0mm" width="1.0374884mm" height="0.532003mm" shape="rect" />
<silkscreenpath route={[{"x":0.8586978000000727,"y":1.5262098000000606},{"x":-0.8586978000000727,"y":1.5262098000000606},{"x":-0.8586978000000727,"y":0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.8586978000000727,"y":-1.5262097999999469},{"x":-0.8586978000000727,"y":-1.5262097999999469},{"x":-0.8586978000000727,"y":-0.49458879999997407}]} />
<silkscreenpath route={[{"x":0.8586978000000727,"y":0.45539659999997184},{"x":0.8586978000000727,"y":-0.45539659999985815}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=cefd4596db214da394d9632b2b88f8f2&pn=C347376",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0, y: 0, z: 2.1999972000000003 },
      }}
      {...props}
    />
  )
}