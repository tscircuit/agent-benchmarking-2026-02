import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["B12"],
  pin2: ["B9"],
  pin3: ["A5"],
  pin4: ["B5"],
  pin5: ["A9"],
  pin6: ["A12"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"]
} as const

export const TYPE_C_31_M_17 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C283540"
  ]
}}
      manufacturerPartNumber="TYPE_C_31_M_17"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="4.320032000000083mm" pcbY="1.4748065999999653mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin8"]} pcbX="-4.320031999999969mm" pcbY="1.4748065999999653mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin9"]} pcbX="4.320032000000083mm" pcbY="-2.325033400000052mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin10"]} pcbX="-4.320031999999969mm" pcbY="-2.325033400000052mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="2.749550000000113mm" pcbY="1.7750346000000263mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.5201900000001842mm" pcbY="1.7750346000000263mm" width="0.7599934mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.5003799999999501mm" pcbY="1.7750346000000263mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.5003799999998364mm" pcbY="1.7750346000000263mm" width="0.6999986mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.5201899999998432mm" pcbY="1.7750346000000263mm" width="0.7599934mm" height="1.1999975999999999mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.749549999999772mm" pcbY="1.7750346000000263mm" width="0.7999983999999999mm" height="1.1999975999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-4.410049599999866,"y":-4.925180599999976},{"x":4.4099480000000995,"y":-4.925180599999976}]} />
<silkscreenpath route={[{"x":-4.399991199999818,"y":-4.925180599999976},{"x":-4.399991199999818,"y":-3.545173200000022}]} />
<silkscreenpath route={[{"x":4.4093892000001915,"y":-4.925739399999884},{"x":4.4093892000001915,"y":-3.574561000000017}]} />
<silkscreenpath route={[{"x":-4.399991199999818,"y":0.16492860000005294},{"x":-4.399991199999818,"y":-1.075175599999966}]} />
<silkscreenpath route={[{"x":4.3999658000002455,"y":0.2128076000000192},{"x":4.3999658000002455,"y":-1.0271187999999256}]} />
<courtyardoutline outline={[{"x":-5.115623999999798,"y":2.6275226000000202},{"x":5.112576000000104,"y":2.6275226000000202},{"x":5.112576000000104,"y":-5.16227739999988},{"x":-5.115623999999798,"y":-5.16227739999988},{"x":-5.115623999999798,"y":2.6275226000000202}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C283540.obj?uuid=a8c86ef7d632469a8c796c24a9574b1e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C283540.step?uuid=a8c86ef7d632469a8c796c24a9574b1e",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.00002540000005137699, y: -2.0181078000000316, z: 0.059997999999999996 },
      }}
      {...props}
    />
  )
}