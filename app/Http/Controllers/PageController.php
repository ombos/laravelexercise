<?php

namespace App\Http\Controllers;

use App\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showpage($id) {

      $page = Page::find($id);

      if ($page) {
        return $page->toJson();
      } else {
        abort(404);
      }
    }
}
