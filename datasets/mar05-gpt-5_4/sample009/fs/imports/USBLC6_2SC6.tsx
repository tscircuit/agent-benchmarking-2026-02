import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["GND"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["VBUS"],
  pin6: ["pin6"]
} as const

export const USBLC6_2SC6 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2687116"
  ]
}}
      manufacturerPartNumber="USBLC6_2SC6"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.9499599999999191mm" pcbY="-1.1490959999998722mm" width="0.532003mm" height="1.0720070000000002mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.1490959999998722mm" width="0.532003mm" height="1.0720070000000002mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.9499599999998054mm" pcbY="-1.1490959999998722mm" width="0.532003mm" height="1.0720070000000002mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.9499599999998054mm" pcbY="1.149095999999986mm" width="0.532003mm" height="1.0720070000000002mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0mm" pcbY="1.149095999999986mm" width="0.532003mm" height="1.0720070000000002mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-0.9499599999999191mm" pcbY="1.149095999999986mm" width="0.532003mm" height="1.0720070000000002mm" shape="rect" />
<silkscreenpath route={[{"x":1.5391891999998961,"y":-0.8892031999998835},{"x":1.5391891999998961,"y":0.8892031999999972}]} />
<silkscreenpath route={[{"x":-1.5391892000000098,"y":-0.8892031999998835},{"x":-1.5391892000000098,"y":0.8892031999999972}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=229b69761e2c45dba6a83d8866dec72d&pn=C2687116",
        rotationOffset: { x: 0, y: 0, z: 90 },
        positionOffset: { x: 0.8381999999999152, y: -0.9651999999999816, z: 2.2397228 },
      }}
      {...props}
    />
  )
}