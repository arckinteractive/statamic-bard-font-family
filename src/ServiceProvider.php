<?php

namespace Arckinteractive\StatamicBardFontFamily;

use Illuminate\Support\Facades\Artisan;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/arckinteractive-bard-font-family.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/arckinteractive-bard-font-family.css'
    ];

    protected $publishables = [];

    public function boot()
    {
        parent::boot();

        Augmentor::addExtension('ArckFontWeight', new ArckFontFamily());

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-font-family'),
        ], 'arckinteractive-bard-font-family');

        Statamic::afterInstalled(function() {
            Artisan::call('vendor:publish --tag=arckinteractive-bard-font-family');
        });
    }
}
