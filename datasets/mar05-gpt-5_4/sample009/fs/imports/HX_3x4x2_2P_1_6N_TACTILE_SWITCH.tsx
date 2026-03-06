import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const HX_3x4x2_2P_1_6N_TACTILE_SWITCH = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C49234124"
  ]
}}
      manufacturerPartNumber="HX_3x4x2_2P_1_6N_TACTILE_SWITCH"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.158999999999992mm" pcbY="0mm" width="1.2999973999999999mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.158999999999992mm" pcbY="0mm" width="1.2999973999999999mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":-2.032000000000039,"y":1.081150999999977},{"x":-2.032000000000039,"y":1.524000000000001}]} />
<silkscreenpath route={[{"x":2.0319999999999254,"y":-1.081150999999977},{"x":2.0319999999999254,"y":-1.524000000000001},{"x":-2.032000000000039,"y":-1.524000000000001},{"x":-2.032000000000039,"y":-1.081150999999977}]} />
<silkscreenpath route={[{"x":-2.032000000000039,"y":1.524000000000001},{"x":2.0319999999999254,"y":1.524000000000001},{"x":2.0319999999999254,"y":1.081150999999977}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5cac25cfdbc24181b6481332bb58bd4f&pn=C49234124",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: -0.049998300000038354 },
      }}
      {...props}
    />
  )
}