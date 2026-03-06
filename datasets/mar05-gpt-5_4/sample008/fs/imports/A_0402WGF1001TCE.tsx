import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const A_0402WGF1001TCE = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C11702"
  ]
}}
      manufacturerPartNumber="A_0402WGF1001TCE"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.43281600000000253mm" pcbY="0mm" width="0.565658mm" height="0.5400039999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.4328160000001162mm" pcbY="0mm" width="0.565658mm" height="0.5400039999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-0.22621240000012222,"y":-0.4986020000000053},{"x":-0.9442450000001372,"y":-0.4986020000000053},{"x":-0.9442450000001372,"y":0.498602000000119},{"x":-0.22621240000012222,"y":0.498602000000119}]} />
<silkscreenpath route={[{"x":0.22621240000000853,"y":-0.4986020000000053},{"x":0.9442449999999099,"y":-0.4986020000000053},{"x":0.9442449999999099,"y":0.498602000000119},{"x":0.22621240000000853,"y":0.498602000000119}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=026a4a15ab5c4a92ac0e421d6d013717&pn=C11702",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0.5299980000000233 },
      }}
      {...props}
    />
  )
}