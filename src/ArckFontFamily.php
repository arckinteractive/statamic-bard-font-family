<?php

namespace Arckinteractive\StatamicBardFontFamily;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class ArckFontFamily extends Mark
{
    public static $name = 'ArckFontFamily';
    protected $tagName = 'span';

    public function renderHTML($mark, $attributes = [])
    {
        $style = 'font-family: ';
        switch ($mark->attrs->key) {
            case 'alh-arial':
                $style .= 'Arial, Helvetica, sans-serif;';
            break;

            case 'alh-brush-script-mt':
                $style .= '\'Brush Script MT\', cursive;';
            break;

            case 'alh-courier-new':
                $style .= '\'Courier New\', Courier, monospace;';
            break;

            case 'alh-garamond':
                $style .= 'Garamond, serif;';
            break;

            case 'alh-georgia':
                $style .= 'Georgia, \'Times New Roman\', Times, serif;';
            break;

            case 'alh-helvetica':
                $style .= 'Helvetica, Arial, sans-serif;';
            break;

            case 'alh-tahoma':
                $style .= 'Tahoma, Geneva, Verdana, sans-serif;';
            break;

            case 'alh-times-new-roman':
                $style .= '\'Times New Roman\', Times, serif;';
            break;

            case 'alh-trebuchet':
                $style .= '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;';
            break;

            case 'alh-verdana':
                $style .= 'Verdana, Geneva, Tahoma, sans-serif;';
            break;
        }

        return [
            [
                'span',
                HTML::mergeAttributes([
                    'class' => 'arck-font-family'
                ], $attributes),
                0
            ],
        ];
    }
}
