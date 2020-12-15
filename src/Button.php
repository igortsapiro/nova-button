<?php

namespace Barracode\Button;

use Laravel\Nova\Fields\Field;

class Button extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'button';

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);
    }

    public function title($title)
    {
        return $this->withMeta([
            'title' => $title
        ]);
    }

    /**
     * @param string $url
     * @return Button
     */
    public function url(string $url)
    {
        return $this->withMeta([
            'url' => $url
        ]);
    }

    /**
     * @param array $queryFields
     * @param array $updatedFields
     * @return Button
     */
    public function fields(array $queryFields, array $updatedFields)
    {
        return $this->withMeta([
            'queryFields' => $queryFields,
            'updatedFields' => $updatedFields
        ]);
    }
}
