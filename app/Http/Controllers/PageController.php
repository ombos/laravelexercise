<?php

namespace App\Http\Controllers;

use App\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function showpage($id) {

      $page = Page::findOrFail($id);
      return $page->toJson();
    }
}
