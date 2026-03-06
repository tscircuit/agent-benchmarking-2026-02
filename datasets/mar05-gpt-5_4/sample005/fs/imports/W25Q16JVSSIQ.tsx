import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["IO2"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["CLK"],
  pin7: ["IO3"],
  pin8: ["VCC"]
} as const

export const W25Q16JVSSIQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C131025"
  ]
}}
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.9050000000000864mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6349999999999909mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.6349999999999909mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.9049999999999727mm" pcbY="-3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.9050000000000864mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.6349999999999909mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.6349999999999909mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.9049999999999727mm" pcbY="3.5300920000000815mm" width="0.6299962mm" height="2.2500082mm" shape="rect" />
<silkscreenpath route={[{"x":-2.6387044000000515,"y":-2.1763989999999467},{"x":-2.6387044000000515,"y":2.1763990000000604},{"x":2.6387044000000515,"y":2.1763990000000604},{"x":2.6387044000000515,"y":-2.1763989999999467},{"x":-2.6387044000000515,"y":-2.1763989999999467}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4652e19b90fa4dbb8662aa4cba61a532&pn=C131025",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 1.6509999999999536, y: -2.844799999999964, z: -3.855096100000037 },
      }}
      {...props}
    />
  )
}