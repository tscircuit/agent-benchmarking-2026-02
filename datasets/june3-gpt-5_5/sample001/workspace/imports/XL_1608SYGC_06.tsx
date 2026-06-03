import type { LedProps } from "@tscircuit/props"

export const XL_1608SYGC_06 = (props: LedProps) => {
  const { name = "LED1", ...restProps } = props

  return (
    <led
      name={name}
      supplierPartNumbers={{
  "jlcpcb": [
    "C965805"
  ]
}}
      manufacturerPartNumber="XL_1608SYGC_06"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.799465mm" pcbY="-0.003429mm" width="0.7999984mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.799465mm" pcbY="0.003429mm" width="0.7999984mm" height="0.7999984mm" shape="rect" />
<silkscreenpath route={[{"x":0.24043639999990774,"y":0.7565136000000621},{"x":1.390497600000117,"y":0.7565136000000621}]} />
<silkscreenpath route={[{"x":0.24043639999990774,"y":-0.7436103999999659},{"x":1.390497600000117,"y":-0.7436103999999659}]} />
<silkscreenpath route={[{"x":1.390497600000117,"y":0.7564628000000084},{"x":1.390497600000117,"y":-0.7235189999998966}]} />
<silkscreenpath route={[{"x":-0.13957299999992756,"y":-0.7458963999999924},{"x":-1.189685200000099,"y":-0.7458963999999924}]} />
<silkscreenpath route={[{"x":-1.4896337999999787,"y":-0.345795599999974},{"x":-1.4896337999999787,"y":-0.4458207999998649},{"x":-1.189685200000099,"y":-0.7458963999999924}]} />
<silkscreenpath route={[{"x":-1.4896337999999787,"y":0.3541268000000173},{"x":-1.4896337999999787,"y":-0.345795599999974}]} />
<silkscreenpath route={[{"x":-1.4896337999999787,"y":0.3541268000000173},{"x":-1.4896337999999787,"y":0.4542790000000423},{"x":-1.189685200000099,"y":0.7542276000000356}]} />
<silkscreenpath route={[{"x":-0.13957299999992756,"y":0.7542276000000356},{"x":-1.189685200000099,"y":0.7542276000000356}]} />
<silkscreentext text="{NAME}" pcbX="-0.053467mm" pcbY="1.768477mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.7385670000001028,"y":1.0184769999999617},{"x":1.631633000000079,"y":1.0184769999999617},{"x":1.631633000000079,"y":-0.980122999999935},{"x":-1.7385670000001028,"y":-0.980122999999935},{"x":-1.7385670000001028,"y":1.0184769999999617}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C965805.obj?uuid=6f130ed341a94a9faf4a4c2e249f3fd3",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C965805.step?uuid=6f130ed341a94a9faf4a4c2e249f3fd3",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000012700000070253736, y: 0.00005079999993995443, z: -0.01 },
      }}
      {...restProps}
    />
  )
}