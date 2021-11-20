<?php

namespace Arckinteractive\StatamicBardFontFamily;

use ProseMirrorToHtml\Marks\Mark;

class ArckFontFamily extends Mark
{
    protected $markType = 'ArckFontFamily';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        $style = 'font-family: ';
        switch ($this->mark->attrs->key) {
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
                'tag'   => 'span',
                'attrs' => [
                    'class' => 'arck-font-family',
                    'style' => $style
                ],
            ],
        ];
    }
}