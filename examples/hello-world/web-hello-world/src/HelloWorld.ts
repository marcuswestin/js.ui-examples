import { Col, Row, Style, TextStyle, TextView } from './lib/js.ui'

export let HelloWorld = () => {
    return Row(Style({ height:'100%', alignItems:'center' }),
        Col(Style({ margin:'auto' }),
            Row(
                TextView(
                    TextStyle({ color:'#456', fontSize:40, fontWeight:'200' }),
                    'Hello World!',
                ),
            ),
            Row(
                TextView(
                    TextStyle({ color:'#456', fontSize:40, fontWeight:'200' }),
                    'Hello World!',
                ),
            ),
        ),
    )
}
