import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import {Route} from "react-router"
import ProductDetail from '../pages/ProductDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Columns width ={4}>
                        <Categories />
                    </Grid.Columns>
                    <Grid.Columns width ={12}>
                       <Route exact path="/" component={ProductList} />
                       <Route exact path="/products" component={ProductList} />
                       <Route path="/products/:name" component={ProductDetail} />
                       <Route exact path="/cart" component={CartDetail} />
                    </Grid.Columns>
                </Grid.Row>
            </Grid>


        </div>
    )

}

// <Route exact path="/" component={ProductList} /> Arayüzde url "/" ProductList.jsx sayfasına gönder
// <Route exact path="/products" component={ProductList} /> Arayüzde url "/products" ProductList.jsx sayfasına gönder
// <Route path="/products/:name" component={ProductDetail} /> Arayüzde url "/products/(parametre olarak ürün adı )"ProductDetail.jsx sayfasına gönder
// <Route exact path="/cart" component={CartDetail} /> Arayüzde url "/cart" CartDetail.jsx sayfasına gönder