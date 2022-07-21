<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'manufacturer_code' => $this->manufacturer_code,
            'manufacturer' => $this->manufacturer,
            'price' => $this->price,
            'category_id' => $this->category_id,
            'auto_id' => $this->auto_id,
            'stock_balance' => $this->stock_balance,
        ];
    }
}
