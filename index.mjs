import React from 'react'

import {
  Document,
  Image,
  Link,
  Page,
  renderToFile,
  Text,
  View,
} from '@react-pdf/renderer'

const image =
  'https://images.unsplash.com/photo-1505821640787-5ab759faaac2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=619&q=80'

function MyDocument() {
  const ComponentToRender = components.c1

  return (
    <Document>
      <Page size="A4" style={{ padding: 8 }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 8,
            borderBottom: '1px solid #EAEAEA',
          }}
        >
          <Image
            src={image}
            style={{
              borderRadius: '50%',
              height: 32,
              width: 32,
              objectFit: 'cover',
            }}
          />
          <Text
            style={{
              marginLeft: 8,
              color: '#58595B',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            Brand Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {Array.from(Array(12).keys()).map((index) => (
            <View
              key={index}
              style={{
                border: '1px solid #EAEAEA',
                borderRadius: 8,
                marginTop: 16,
                width: '24%',
              }}
            >
              <View
                style={{
                  width: '100%',
                  height: '20px',
                  backgroundColor: '#F7F7F7',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottom: '1px solid #EAEAEA',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingLeft: 4,
                  paddingRight: 4,
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    color: '#716F72',
                    fontSize: 6,
                  }}
                >
                  Ended on March 1st, 2021
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Image
                    src="./img/fb.png"
                    style={{ width: 8, height: 8, marginRight: 2 }}
                  />
                  <Image
                    src="./img/msn.png"
                    style={{ width: 8, height: 8, marginRight: 2 }}
                  />
                  <Image
                    src="./img/insta.png"
                    style={{ width: 8, height: 8, marginRight: 2 }}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 4,
                    color: '#58595B',
                  }}
                >
                  Ven a probar tu Kia favorito junto a Gabriela! Te esperamos
                  este sábado 16 de febrero de 1pm a 3pm en nuestro dealer
                  Yokomuro, en la Carr #167 km 19.2, Bayamón. Llégale!
                </Text>
              </View>
              <Image
                src={image}
                style={{
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                  height: 120,
                  width: 'auto',
                  marginTop: 8,
                  marginLeft: 8,
                  marginRight: 8,
                  objectFit: 'cover',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  border: '1px solid #EAEAEA',
                  justifyContent: 'space-between',
                  padding: 5,
                  marginLeft: 8,
                  marginRight: 8,
                  marginBottom: 6,
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    width: '55%',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 6,
                      color: '#58595B',
                    }}
                  >
                    Bono de hasta $3,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 4,
                      color: '#58595B',
                    }}
                  >
                    Garantía de 10 años o 100,000 millas, asistencia en
                    carretera GRATIS por 2 años.
                  </Text>
                </View>
                <Link
                  src="https://getnerdify.com"
                  style={{
                    border: '1px solid #BBBBBB',
                    borderRadius: 4,
                    fontSize: '6px',
                    color: '#58595B',
                    paddingHorizontal: 4,
                    paddingBottom: 3,
                    paddingTop: 4,
                    color: '#58595B',
                  }}
                >
                  Reserva Ya!
                </Link>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
renderToFile(<MyDocument />, `${__dirname}/report.pdf`)
