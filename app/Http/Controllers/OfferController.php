<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function getoffers() {

      $client = new \GuzzleHttp\Client();
      $request = $client->get('https://demo.appmanager.pl/api/v1/ads');
      $response = $request->getBody()->getContents();
      $data = json_decode($response);
      return json_encode($data->data);
    }

    public function showoffer($id) {

      if (!empty($id)) {

        $client = new \GuzzleHttp\Client();
        $request = $client->get('https://demo.appmanager.pl/api/v1/ads/'.$id);
        $response = $request->getBody()->getContents();
        $data = json_decode($response);
        return json_encode($data->data);
      }

    }
}
