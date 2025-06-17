"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store"
import { checkoutAction } from "./checkout-action";
export default function  CheckoutPage(){
    const {items ,addItem , removeItem } = useCartStore();
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if(total === 0 || items.length === 0){
        return <div className="container mx-auto px-4 py-8 items-center">
            <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        </div>
    }
return ( 
<div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
    <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
            <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-4 ">
                {items.map((item,key)=>(
                    <li className="flex flex-col pb-2 border-b border-gray-400 gap-2"
                     key={key}>
                        <div className="flex justify-between ">
                            <span className="font-medium">{item.name}</span>
                            <span className="font-semibold">${(item.price * item.quantity/100).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2">
 <Button size = "sm"
  onClick={()=>{removeItem(item.id)}}
                     variant="outline">  - </Button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <Button size="sm"
                    onClick={()=>addItem({...item, quantity:1})}
                    variant="outline" className="text-white bg-black">  + </Button>
                        </div>
                    </li>
                 ) )}
            </ul>
            <div className="mt-4 border-t border-gray-400 pt-2 text-lg font-semibold">
                Total :${(total/100).toFixed(2)}
            </div>
        </CardContent>
    </Card>
    <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)}/>
        <Button type="submit" className="text-white bg-black w-full "
        variant="default">Proceed to Payment</Button>
       
    </form>
</div>
)
}