<?php

namespace Arckinteractive\StatamicBardFontFamily;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/arckinteractive-bard-font-family.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/arckinteractive-bard-font-family.css'
    ];

    protected $publishables = [

    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addMark(ArckFontFamily::class);

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-font-family'),
        ], 'arckinteractive-bard-font-family');
    }
}
