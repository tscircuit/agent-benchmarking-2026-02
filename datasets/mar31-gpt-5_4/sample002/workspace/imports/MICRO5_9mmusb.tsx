import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VBUS"],
  pin2: ["D_NEG"],
  pin3: ["D_POS"],
  pin4: ["ID"],
  pin5: ["GND"],
  pin6: ["pin6"],
  pin7: ["pin6_alt1"],
  pin8: ["pin6_alt1"],
  pin9: ["pin6_alt1"],
  pin10: ["pin6_alt1"],
  pin11: ["pin6_alt1"]
} as const

export const MICRO5_9mmusb = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C393940"
  ]
}}
      manufacturerPartNumber="MICRO5_9mmusb"
      footprint={<footprint>
        <hole pcbX="1.99999600000001mm" pcbY="0.37505640000006224mm" diameter="0.5999987999999999mm" />
<hole pcbX="-1.9999960000001238mm" pcbY="0.37505640000006224mm" diameter="0.5999987999999999mm" />
<platedhole  portHints={["pin10"]} pcbX="2.824987999999962mm" pcbY="-1.7250155999998924mm" holeWidth="0.5999987999999999mm" holeHeight="1.8999962mm" outerWidth="1.0999978mm" outerHeight="2.3999951999999998mm" shape="pill" />
<platedhole  portHints={["pin11"]} pcbX="-2.824987999999962mm" pcbY="-1.7250155999998924mm" holeWidth="0.5999987999999999mm" holeHeight="1.8999962mm" outerWidth="1.0999978mm" outerHeight="2.3999951999999998mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-1.299972000000139mm" pcbY="1.3250163999999813mm" width="0.39999919999999994mm" height="2.0999958mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.6499860000000126mm" pcbY="1.3250163999999813mm" width="0.39999919999999994mm" height="2.0999958mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1368683772161603e-13mm" pcbY="1.3250163999999813mm" width="0.39999919999999994mm" height="2.0999958mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.6499860000000126mm" pcbY="1.3250163999999813mm" width="0.39999919999999994mm" height="2.0999958mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.299972000000139mm" pcbY="1.3250163999999813mm" width="0.39999919999999994mm" height="2.0999958mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-3.200146000000018mm" pcbY="0.5249164000001656mm" width="1.499997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="3.200146000000018mm" pcbY="0.5249164000001656mm" width="1.499997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-1.1000740000000633mm" pcbY="-1.7250155999998924mm" width="1.2999973999999999mm" height="1.2999973999999999mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="1.1000740000000633mm" pcbY="-1.7250155999998924mm" width="1.2999973999999999mm" height="1.2999973999999999mm" shape="rect" />
<silkscreenpath route={[{"x":3.691128000000049,"y":-3.866235599999868},{"x":4.0899842000000035,"y":-4.489983399999801},{"x":-4.229989000000046,"y":-4.5500035999998545},{"x":-3.700272000000041,"y":-3.866235599999868}]} />
<silkscreenpath route={[{"x":-3.699992599999973,"y":-3.8670991999998705},{"x":3.692067800000018,"y":-3.8670991999998705},{"x":3.7000179999998863,"y":-3.8591489999998885}]} />
<silkscreenpath route={[{"x":3.7000179999998863,"y":-3.8591489999998885},{"x":3.6829999999999927,"y":-0.19999959999995554}]} />
<silkscreenpath route={[{"x":-2.314930600000025,"y":1.124991399999999},{"x":-1.69997120000005,"y":1.124991399999999}]} />
<silkscreenpath route={[{"x":1.7073372000000973,"y":1.124991399999999},{"x":2.2247352000000546,"y":1.124991399999999}]} />
<silkscreenpath route={[{"x":-3.6919408000001113,"y":-3.8591489999998885},{"x":-3.708958800000005,"y":-0.20007579999980862}]} />
<courtyardoutline outline={[{"x":-4.488751999999863,"y":2.6143844000000627},{"x":4.34244799999999,"y":2.6143844000000627},{"x":4.34244799999999,"y":-4.81981559999997},{"x":-4.488751999999863,"y":-4.81981559999997},{"x":-4.488751999999863,"y":2.6143844000000627}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C393940.obj?uuid=b67ad99a58734be1a338107c68a51023",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C393940.step?uuid=b67ad99a58734be1a338107c68a51023",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: -1.5899969999999612, z: 0.14999699999999994 },
      }}
      {...props}
    />
  )
}