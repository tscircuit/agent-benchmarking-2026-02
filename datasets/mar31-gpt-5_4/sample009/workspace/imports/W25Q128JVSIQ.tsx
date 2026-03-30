import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CS"],
  pin2: ["DO"],
  pin3: ["IO2"],
  pin4: ["GND"],
  pin5: ["DI"],
  pin6: ["CLK"],
  pin7: ["IO3"],
  pin8: ["VCC"]
} as const

export const W25Q128JVSIQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C97521"
  ]
}}
      manufacturerPartNumber="W25Q128JVSIQ"
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
<courtyardoutline outline={[{"x":-3.0693999999999733,"y":4.593399999999974},{"x":2.891599999999926,"y":4.593399999999974},{"x":2.891599999999926,"y":-4.745800000000031},{"x":-3.0693999999999733,"y":-4.745800000000031},{"x":-3.0693999999999733,"y":4.593399999999974}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C97521.obj?uuid=4652e19b90fa4dbb8662aa4cba61a532",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C97521.step?uuid=4652e19b90fa4dbb8662aa4cba61a532",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.069425 },
      }}
      {...props}
    />
  )
}