<?php

namespace Arckinteractive\StatamicBardFontFamily;


use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class ArckFontFamily extends Mark
{
    public static $name = 'ArckFontFamily';

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return [
            'span',
            HTML::mergeAttributes(
                [
                    'class' => 'arck-font-family',
                    'style' => $this->getFontStyle($mark->attrs->key),
                ]
            ),
            0
        ];
    }

    private function getFontStyle($font): string
    {
        $style = 'font-family: ';

        switch ($font) {
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
            default:
                $style .= 'Verdana, Geneva, Tahoma, sans-serif;';
            break;
        }

        return $style;
    }
}