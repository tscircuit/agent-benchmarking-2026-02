import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["EP4"],
  pin2: ["EP3"],
  pin3: ["EP1"],
  pin4: ["EP2"],
  pin5: ["A1"],
  pin6: ["B12"],
  pin7: ["A4"],
  pin8: ["B9"],
  pin9: ["B8"],
  pin10: ["A5"],
  pin11: ["B7"],
  pin12: ["A6"],
  pin13: ["A7"],
  pin14: ["B6"],
  pin15: ["B5"],
  pin16: ["B1"],
  pin17: ["A12"],
  pin18: ["A8"],
  pin19: ["B4"],
  pin20: ["A9"]
} as const

export const KH_TYPE_C_16P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C709357"
  ]
}}
      manufacturerPartNumber="KH_TYPE_C_16P"
      footprint={<footprint>
        <hole pcbX="-2.890011999999956mm" pcbY="0.9349359500000674mm" diameter="0.700024mm" />
<hole pcbX="2.8900120000000697mm" pcbY="0.9349359500000674mm" diameter="0.700024mm" />
<platedhole  portHints={["pin3"]} pcbX="-4.320032000000083mm" pcbY="-2.7150440499999604mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="4.320032000000083mm" pcbY="-2.7150440499999604mm" holeWidth="0.5999987999999999mm" holeHeight="1.3999972mm" outerWidth="0.9999979999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin2"]} pcbX="4.320032000000083mm" pcbY="1.46503395000002mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin1"]} pcbX="-4.320032000000083mm" pcbY="1.46503395000002mm" holeWidth="0.5999987999999999mm" holeHeight="1.5999968mm" outerWidth="0.9999979999999999mm" outerHeight="1.9999959999999999mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="-3.3500060000000076mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.0500319999999874mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-2.5499059999999645mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-2.249932000000058mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-1.7500600000000759mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-1.2499339999999393mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-0.7500619999999572mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-0.2499359999999342mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="0.2499359999999342mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.7500619999999572mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.7500600000000759mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="3.050032000000101mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="3.3500060000000076mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.2496799999998984mm" pcbY="2.1150199500000326mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="2.2499065999999175mm" pcbY="2.1150453500000594mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="2.5498805999999377mm" pcbY="2.1150453500000594mm" width="0.29999939999999997mm" height="1.2999973999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.57197460000009,"y":-1.6232250499999736},{"x":4.57197460000009,"y":0.27306275000000824}]} />
<silkscreenpath route={[{"x":-4.572025399999916,"y":-3.8070154499999944},{"x":-4.572025399999916,"y":-5.380088249999972},{"x":4.57197460000009,"y":-5.380088249999972},{"x":4.57197460000009,"y":-3.8070154499999944}]} />
<silkscreenpath route={[{"x":-4.572025399999916,"y":0.27306275000000824},{"x":-4.572025399999916,"y":-1.6232250499999736}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=954b2a5828604707b62aef0fe6e7695f&pn=C709357",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.449997049999979, z: -1.9650440499999717 },
      }}
      {...props}
    />
  )
}