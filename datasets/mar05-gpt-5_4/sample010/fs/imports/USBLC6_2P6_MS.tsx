import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"]
} as const

export const USBLC6_2P6_MS = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C3647099"
  ]
}}
      manufacturerPartNumber="USBLC6_2P6_MS"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.4999990000001162mm" pcbY="-0.7500619999999572mm" width="0.299974mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.00012700000002041634mm" pcbY="-0.7500619999999572mm" width="0.299974mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.4999990000000025mm" pcbY="-0.7500619999999572mm" width="0.299974mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.4999990000000025mm" pcbY="0.7500619999999572mm" width="0.29999939999999997mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-0.00012700000002041634mm" pcbY="0.7500619999999572mm" width="0.29999939999999997mm" height="0.49999899999999997mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.4999990000001162mm" pcbY="0.7500619999999572mm" width="0.29999939999999997mm" height="0.49999899999999997mm" shape="rect" />
<silkscreenpath route={[{"x":0.8760714000000007,"y":-0.6761987999999519},{"x":0.8760714000000007,"y":0.6761988000000656}]} />
<silkscreenpath route={[{"x":-0.8763254000000416,"y":-0.6761987999999519},{"x":-0.8763254000000416,"y":0.6761988000000656}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2f83ac3d23f34d74addd6042b9238491&pn=C3647099",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: -941.9390102, y: 839.724, z: 1.5999984 },
      }}
      {...props}
    />
  )
}