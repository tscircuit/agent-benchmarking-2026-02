import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin3: ["EH6"],
  pin4: ["EH5"],
  pin25: ["EH1"],
  pin26: ["pin25_alt1"],
  pin27: ["pin25_alt1"],
  pin28: ["pin25_alt1"],
  pin29: ["B12"],
  pin30: ["B11"],
  pin31: ["B10"],
  pin32: ["B9"],
  pin33: ["B8"],
  pin34: ["B7"],
  pin35: ["B6"],
  pin36: ["B5"],
  pin37: ["B4"],
  pin38: ["B3"],
  pin39: ["B2"],
  pin40: ["B1"],
  pin41: ["A12"],
  pin42: ["A11"],
  pin43: ["A10"],
  pin44: ["A9"],
  pin45: ["A8"],
  pin46: ["A7"],
  pin47: ["A6"],
  pin48: ["A5"],
  pin49: ["A4"],
  pin50: ["A3"],
  pin51: ["A2"],
  pin52: ["A1"]
} as const

export const HX_TYPE_C_24P_1_6_USB_C_3_2_REC__HORZ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C49261591"
  ]
}}
      manufacturerPartNumber="HX_TYPE_C_24P_1_6_USB_C_3_2_REC__HORZ"
      footprint={<footprint>
        <platedhole  portHints={["pin25"]} pcbX="-4.020058000000063mm" pcbY="1.509896700000013mm" holeWidth="0.5999987999999999mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin26"]} pcbX="-4.320032000000083mm" pcbY="1.9099466999999777mm" holeWidth="0.5999987999999999mm" holeHeight="1.499997mm" outerWidth="1.0999978mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin27"]} pcbX="4.020058000000063mm" pcbY="1.509896700000013mm" holeWidth="0.5999987999999999mm" holeHeight="1.1999976mm" outerWidth="1.0999978mm" outerHeight="1.6999966mm" shape="pill" />
<platedhole  portHints={["pin28"]} pcbX="4.320032000000083mm" pcbY="1.9099466999999777mm" holeWidth="0.5999987999999999mm" holeHeight="1.499997mm" outerWidth="1.0999978mm" outerHeight="1.9999959999999999mm" shape="pill" />
<platedhole  portHints={["pin4"]} pcbX="-5.500116000000048mm" pcbY="-2.8900436999999783mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<platedhole  portHints={["pin3"]} pcbX="5.500116000000048mm" pcbY="-2.8900436999999783mm" holeWidth="0.5999987999999999mm" holeHeight="1.2999974mm" outerWidth="1.0999978mm" outerHeight="1.7999964mm" shape="pill" />
<smtpad portHints={["pin29"]} pcbX="-2.875026000000048mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-2.375154000000066mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-1.875028000000043mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="-1.3751559999999472mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="-0.8750300000001516mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="-0.37515799999994215mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="0.1249679999999671mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="0.6248399999999492mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin37"]} pcbX="1.1249659999999722mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin38"]} pcbX="1.624838000000068mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin39"]} pcbX="2.124964000000091mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin40"]} pcbX="2.6248359999999593mm" pcbY="0.8398446999999578mm" width="0.29999939999999997mm" height="0.8500109999999999mm" shape="rect" />
<smtpad portHints={["pin41"]} pcbX="2.875026000000048mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin42"]} pcbX="2.374900000000025mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin43"]} pcbX="1.875028000000043mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin44"]} pcbX="1.3749019999999064mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin45"]} pcbX="0.8750300000001516mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin46"]} pcbX="0.374904000000015mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin47"]} pcbX="-0.1249679999999671mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin48"]} pcbX="-0.62509399999999mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin49"]} pcbX="-1.1249659999999722mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin50"]} pcbX="-1.6250920000001088mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin51"]} pcbX="-2.124964000000091mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<smtpad portHints={["pin52"]} pcbX="-2.62509mm" pcbY="2.440044700000044mm" width="0.29999939999999997mm" height="0.9999979999999999mm" shape="rect" />
<silkscreenpath route={[{"x":4.725009600000021,"y":-0.8899969000000283},{"x":4.725009600000021,"y":-5.139899499999956}]} />
<silkscreenpath route={[{"x":-4.724958799999968,"y":-0.8899206999999478},{"x":-4.724958799999968,"y":-5.139899499999956}]} />
<silkscreenpath route={[{"x":-4.724958799999968,"y":0.11007730000005722},{"x":4.724933399999941,"y":0.11007730000005722}]} />
<silkscreenpath route={[{"x":6.499961600000006,"y":-5.139899499999956},{"x":4.724933399999941,"y":-5.139899499999956}]} />
<silkscreenpath route={[{"x":-6.499987000000033,"y":-5.139899499999956},{"x":-4.724958799999968,"y":-5.139899499999956}]} />
<silkscreenpath route={[{"x":-4.724958799999968,"y":0.11005189999991671},{"x":-4.94062715726227,"y":0.059438845697968645},{"x":-5.113260513050818,"y":-0.07938566964139682},{"x":-5.208971134431408,"y":-0.2791705503129833},{"x":-5.208971134431408,"y":-0.5006982496870478},{"x":-5.113260513050818,"y":-0.7004831303585206},{"x":-4.94062715726227,"y":-0.8393076456979998},{"x":-4.724958799999968,"y":-0.8899206999999478}]} />
<silkscreenpath route={[{"x":4.724984200000108,"y":0.11005189999991671},{"x":4.724984200000108,"y":-0.8899715000000015}]} />
<silkscreenpath route={[{"x":4.420082599999887,"y":0.6850317000000814},{"x":4.420082599999887,"y":-5.389937099999997},{"x":-4.469917399999986,"y":-5.389937099999997},{"x":-4.469917399999986,"y":0.6926771000000826}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=0a0903facfa34130814ebe333d0f9a1f&pn=C49261591",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: -1.2750101000000313, z: -2.14004369999999 },
      }}
      {...props}
    />
  )
}