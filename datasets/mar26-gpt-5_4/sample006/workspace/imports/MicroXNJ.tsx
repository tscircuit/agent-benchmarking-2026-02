import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["SH1"],
  pin7: ["SH2"],
  pin8: ["SH3"],
  pin9: ["SH4"]
} as const

export const MicroXNJ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C404969"
  ]
}}
      manufacturerPartNumber="MicroXNJ"
      footprint={<footprint>
        <platedhole  portHints={["pin6"]} pcbX="2.424938000000111mm" pcbY="0.8690420000000358mm" outerDiameter="1.2999973999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-2.4249379999998837mm" pcbY="0.8690420000000358mm" outerDiameter="1.2999973999999999mm" holeDiameter="0.700024mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-3.624834000000078mm" pcbY="-1.811166000000071mm" holeWidth="0.700024mm" holeHeight="1.200023mm" outerWidth="1.2999973999999999mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin7"]} pcbX="3.624834000000078mm" pcbY="-1.811166000000071mm" holeWidth="0.700024mm" holeHeight="1.200023mm" outerWidth="1.2999973999999999mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="1.299972000000139mm" pcbY="0.8611680000000206mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6499860000000126mm" pcbY="0.8611680000000206mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.1368683772161603e-13mm" pcbY="0.8611680000000206mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6499860000000126mm" pcbY="0.8611680000000206mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.2999719999999115mm" pcbY="0.8611680000000206mm" width="0.39999919999999994mm" height="1.9999959999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-2.9999431999999615,"y":-3.9225664000001643},{"x":-2.9999431999999615,"y":-4.422565400000053},{"x":3.090037000000052,"y":-4.452435800000103},{"x":3.1000192000000197,"y":-3.9225664000001643}]} />
<silkscreenpath route={[{"x":3.7900864000001775,"y":-2.91934260000005},{"x":3.7900864000001775,"y":-3.5117976000000226}]} />
<silkscreenpath route={[{"x":3.273780600000009,"y":1.1024933999999575},{"x":3.7900864000001775,"y":1.1024933999999575},{"x":3.7900864000001775,"y":-0.6884098000000449}]} />
<silkscreenpath route={[{"x":-3.7454586000000063,"y":-0.6809676000000309},{"x":-3.7454586000000063,"y":1.1024933999999575},{"x":-3.273602799999935,"y":1.1024933999999575}]} />
<silkscreenpath route={[{"x":-3.7454586000000063,"y":-3.5226942000000463},{"x":-3.7454586000000063,"y":-2.9266578000000436}]} />
<silkscreenpath route={[{"x":-2.9999431999999615,"y":-3.9225664000001643},{"x":-3.4499041999999918,"y":-3.9424545999999054},{"x":-3.869969400000059,"y":-4.437576800000102},{"x":-3.7454586000000063,"y":-3.5226942000000463}]} />
<silkscreenpath route={[{"x":-2.9999431999999615,"y":-3.9225664000001643},{"x":3.1000192000000197,"y":-3.9225664000001643},{"x":3.400094800000147,"y":-3.9225664000001643},{"x":3.929989599999999,"y":-4.39749560000007},{"x":3.8000178000000915,"y":-3.5117976000000226}]} />
<silkscreenpath route={[{"x":-3.7326824000000443,"y":-0.48259360000008655},{"x":-3.731869599999982,"y":-0.30807019999997465}]} />
<silkscreenpath route={[{"x":-3.734968399999957,"y":-0.48302539999997407},{"x":-3.7312599999999065,"y":-0.2752026000000569}]} />
<courtyardoutline outline={[{"x":-4.246181999999976,"y":2.378627999999935},{"x":4.305617999999981,"y":2.378627999999935},{"x":4.305617999999981,"y":-4.826971999999955},{"x":-4.246181999999976,"y":-4.826971999999955},{"x":-4.246181999999976,"y":2.378627999999935}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C404969.obj?uuid=a2b1a9114fe84000a47b1a073321bc87",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C404969.step?uuid=a2b1a9114fe84000a47b1a073321bc87",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -1.5021043999999986, z: -1.8298538000000002 },
      }}
      {...props}
    />
  )
}