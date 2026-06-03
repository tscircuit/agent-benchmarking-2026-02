import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CS"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["CLK"],
  pin7: ["pin7"],
  pin8: ["VCC"],
  pin9: ["EP"]
} as const

export const W25Q16JVUXIQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2843335"
  ]
}}
      manufacturerPartNumber="W25Q16JVUXIQ"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.750062mm" pcbY="-1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.249936mm" pcbY="-1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.249936mm" pcbY="-1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.750062mm" pcbY="-1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.750062mm" pcbY="1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.249936mm" pcbY="1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.249936mm" pcbY="1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.750062mm" pcbY="1.50749mm" width="0.2800096mm" height="0.5999988mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" width="1.6999966mm" height="0.2999994mm" shape="rect" />
<silkscreenpath route={[{"x":1.0763249999998834,"y":-1.5760446000000456},{"x":1.0763249999998834,"y":1.5763240000001133}]} />
<silkscreenpath route={[{"x":-1.0761472000000367,"y":1.5763240000001133},{"x":-1.0761472000000367,"y":-1.5760446000000456}]} />
<silkscreenpath route={[{"x":-0.6619240000001128,"y":-2.032000000000039},{"x":-0.6653340070083686,"y":-2.057901574757693},{"x":-0.6753316416909456,"y":-2.0820380000000114},{"x":-0.6912355817660227,"y":-2.1027644182340737},{"x":-0.711962000000085,"y":-2.118668358309151},{"x":-0.7360984252424032,"y":-2.1286659929917278},{"x":-0.7620000000000573,"y":-2.1320759999999837},{"x":-0.7879015747577114,"y":-2.1286659929917278},{"x":-0.8120380000000296,"y":-2.118668358309151},{"x":-0.8327644182340919,"y":-2.1027644182340737},{"x":-0.848668358309169,"y":-2.0820380000000114},{"x":-0.858665992991746,"y":-2.057901574757693},{"x":-0.8620760000000018,"y":-2.032000000000039},{"x":-0.858665992991746,"y":-2.006098425242385},{"x":-0.848668358309169,"y":-1.9819619999998395},{"x":-0.8327644182340919,"y":-1.9612355817660045},{"x":-0.8120380000000296,"y":-1.9453316416909274},{"x":-0.7879015747577114,"y":-1.9353340070083505},{"x":-0.7620000000000573,"y":-1.9319240000000946},{"x":-0.7360984252424032,"y":-1.9353340070083505},{"x":-0.711962000000085,"y":-1.9453316416909274},{"x":-0.6912355817660227,"y":-1.9612355817660045},{"x":-0.6753316416909456,"y":-1.9819619999998395},{"x":-0.6653340070083686,"y":-2.006098425242385},{"x":-0.6619240000001128,"y":-2.032000000000039}]} />
<silkscreentext text="{NAME}" pcbX="0.003556mm" pcbY="2.813306mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.3259439999999358,"y":2.0633060000000114},{"x":1.333056000000056,"y":2.0633060000000114},{"x":1.333056000000056,"y":-2.3736939999998867},{"x":-1.3259439999999358,"y":-2.3736939999998867},{"x":-1.3259439999999358,"y":2.0633060000000114}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2843335.obj?uuid=2b35e1c3dcc44b77887d4f445b51370a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2843335.step?uuid=2b35e1c3dcc44b77887d4f445b51370a",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00795020000009572, y: 0.027940000000057807, z: 0 },
      }}
      {...props}
    />
  )
}