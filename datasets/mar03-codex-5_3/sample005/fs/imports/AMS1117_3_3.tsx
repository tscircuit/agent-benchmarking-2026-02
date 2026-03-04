import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["VIN"],
  pin4: ["TAB"]
} as const

export const AMS1117_3_3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C347222"
  ]
}}
      manufacturerPartNumber="AMS1117_3_3"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="2.834893999999963mm" pcbY="-2.2999699999999166mm" width="2.4699975999999997mm" height="0.9800081999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.834893999999963mm" pcbY="0mm" width="2.4699975999999997mm" height="0.9800081999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.834893999999963mm" pcbY="2.2999700000000303mm" width="2.4699975999999997mm" height="0.9800081999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-2.8348940000000766mm" pcbY="0mm" width="2.4699975999999997mm" height="3.5999928mm" shape="rect" />
<silkscreenpath route={[{"x":-1.3713967999999568,"y":-3.3262061999998878},{"x":-1.3713967999999568,"y":3.3262062000000014},{"x":1.3713967999999568,"y":3.3262062000000014},{"x":1.3713967999999568,"y":-3.3262061999998878},{"x":-1.3713967999999568,"y":-3.3262061999998878}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e80246a9471445bfb635be848806a22e&pn=C347222",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: -941.755038, y: 660.4, z: -1.989974099999938 },
      }}
      {...props}
    />
  )
}